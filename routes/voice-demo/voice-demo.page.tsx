import { useFetcher } from '@remix-run/react';
import { FC, useEffect, useMemo, useState } from 'react';
import { RetellWebClient } from 'retell-client-js-sdk';
import { H2 } from '@/components/ui/typography';
import { CircleUserRound, Phone, PhoneOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import * as React from 'react';
import { CreateWebCallResponse } from '@/actions/voice-demo.actions';

export const VoiceDemoPage: FC = () => {
  const fetcher = useFetcher<CreateWebCallResponse>();
  const [callState, setCallState] = useState<string>('Idle');
  const [isCallInProgress, setIsCallInProgress] = useState<boolean>(false);
  const [isAgentTalking, setIsAgentTalking] = useState<boolean>(false);
  const [transcript, setTranscript] = useState<
    {
      role: 'agent' | 'user';
      content: string;
    }[]
  >([]);

  const retellWebClient = useMemo(() => {
    const client = new RetellWebClient();
    client.on('call_started', () => {
      setCallState('Call Started');
      setIsCallInProgress(true);
    });

    client.on('call_ended', () => {
      setCallState('Call Ended');
      setIsCallInProgress(false);
      setIsAgentTalking(false);
    });

    client.on('agent_start_talking', () => {
      setIsAgentTalking(true);
    });

    client.on('agent_stop_talking', () => {
      setIsAgentTalking(false);
    });

    client.on('update', (update) => {
      if (update.transcript) {
        setTranscript(update.transcript);
      }
    });

    client.on('error', (error) => {
      console.error('Retell Web Client Error:', error);
      setCallState('Error');
      setIsCallInProgress(false);
      setIsAgentTalking(false);
      client.stopCall();
    });

    return client;
  }, []);
  const isLoading = fetcher.state !== 'idle';
  const handleCall = () => {
    fetcher.submit(null, { method: 'post' });
  };

  useEffect(() => {
    if (fetcher.data && retellWebClient) {
      const { accessToken } = fetcher.data;
      retellWebClient.startCall({
        accessToken,
      });
    }
  }, [fetcher.data, retellWebClient]);

  return (
    <div className="flex flex-col items-center pb-10">
      <H2>Voice Demo</H2>
      <p className="text-[21px] leading-[32px] text-gradient-dark bg-clip-text text-transparent mb-4 md:mb-10 md:text-[24px] md:leading-[40px]">
        Experience the power of voice interaction with our AI agent.
      </p>
      <div className="flex flex-col md:flex-row gap-8 justify-center">
        <div className="flex flex-col items-center">
          <div className="relative mt-10">
            {isAgentTalking && <div className="voice-avatar-progress" />}
            <CircleUserRound className="text-of-primary w-40 h-40 " />
          </div>
          <div className="flex flex-row gap-4 mt-10">
            <Button
              disabled={isLoading || isCallInProgress}
              onClick={handleCall}
            >
              <Phone className="mr-4" />
              Start Call
            </Button>

            <Button
              disabled={!isCallInProgress}
              onClick={() => retellWebClient?.stopCall()}
            >
              <PhoneOff className="mr-4" />
              End Call
            </Button>
          </div>
        </div>

        <div className="flex flex-col md:w-[480px]">
          <div className="text-of-gray-400">Transcript:</div>
          <div className="p-4 flex flex-col-reverse border border-of-gray-400 w-full min-h-80 max-h-80 overflow-y-auto">
            {transcript
              .slice()
              .reverse()
              .map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-2 ${
                    item.role === 'agent' ? 'text-of-primary' : 'text-gray-500'
                  }`}
                >
                  <span className="font-semibold">
                    {item.role === 'agent' ? 'Agent' : 'User'}:
                  </span>
                  <span>{item.content}</span>
                </div>
              ))}
          </div>
          <div className="text-of-gray-400">Call state: {callState}</div>
        </div>
      </div>
    </div>
  );
};
