import {
  AlertDialog,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';

export interface DialogConfiguration {
  title: string;
  content: string;
}

export interface DialogConfigurationMap {
  Success: DialogConfiguration;
  Failure: DialogConfiguration;
}

interface LandingPageDialogComponentProps {
  dialogConfigurationMap?: DialogConfigurationMap;
  open: boolean;
  onClose: () => void;
  isSuccess: boolean;
}

const DefaultDialogConfigurationMap = {
  Success: {
    title: 'Submission Successful!',
    content:
      'Thank you for contacting us! Our team will review your inquiry and get back to you as soon as possible.',
  },
  Failure: {
    title: 'Submission Failed!',
    content: 'Something went wrong, failed to submit form',
  },
};

export function OFIConfirmationDialogComponent({
  dialogConfigurationMap = DefaultDialogConfigurationMap,
  open,
  onClose,
  isSuccess,
}: LandingPageDialogComponentProps) {
  const config = isSuccess
    ? dialogConfigurationMap.Success
    : dialogConfigurationMap.Failure;

  return (
    <AlertDialog open={open}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{config.title}</AlertDialogTitle>
          <AlertDialogDescription>{config.content}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={onClose}>Close</AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
