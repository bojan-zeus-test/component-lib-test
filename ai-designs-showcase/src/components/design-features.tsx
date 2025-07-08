import React from 'react';
import { Layout } from '@/components/ui/layout';
import { SectionHeader } from '@/components/ui/section-header';
import { UsesCasesList } from '@/components/ui/uses-cases-list';

// Mock feature icons using emoji data URIs
const featureIcons = {
  speed: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiByeD0iNDQiIGZpbGw9IiM2MzY2RjEiLz4KPHN2ZyB4PSIyMiIgeT0iMjIiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cG9seWdvbiBwb2ludHM9IjEzLDIgMywyMiAyMSwyMiIvPgo8L3N2Zz4KPC9zdmc+',
  ai: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiByeD0iNDQiIGZpbGw9IiMxMEI5ODEiLz4KPHN2ZyB4PSIyMiIgeT0iMjIiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIzIi8+CjxwYXRoIGQ9Im0xMiAxIDcgNS03IDV6Ii8+CjxwYXRoIGQ9Im0xMiAyMyA3LTUtNy01eiIvPgo8L3N2Zz4KPC9zdmc+',
  customize: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiByeD0iNDQiIGZpbGw9IiNGNTk4NDIiLz4KPHN2ZyB4PSIyMiIgeT0iMjIiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMTIgMjBhOCA4IDAgMSAwIDAtMTYgOCA4IDAgMCAwIDAgMTZaIi8+CjxwYXRoIGQ9Im0xNSA5LTYgNiIvPgo8cGF0aCBkPSJtOSA5aDZWMTUiLz4KPC9zdmc+Cjwvc3ZnPg==',
  export: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODgiIGhlaWdodD0iODgiIHZpZXdCb3g9IjAgMCA4OCA4OCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9Ijg4IiBoZWlnaHQ9Ijg4IiByeD0iNDQiIGZpbGw9IiNFRjQ0NDQiLz4KPHN2ZyB4PSIyMiIgeT0iMjIiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cGF0aCBkPSJNMjEgMTVWMTlBMiAyIDAgMCAxIDE5IDIxSDVBMiAyIDAgMCAxIDMgMTlWMTUiLz4KPHN2ZyB4PSIyMiIgeT0iMjIiIHdpZHRoPSI0NCIgaGVpZ2h0PSI0NCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiPgo8cG9seWxpbmUgcG9pbnRzPSI3LDEwIDEyLDE1IDE3LDEwIi8+CjxsaW5lIHgxPSIxMiIgeTE9IjE1IiB4Mj0iMTIiIHkyPSIzIi8+Cjwvc3ZnPgo8L3N2Zz4K',
};

export const DesignFeatures = () => {
  return (
    <Layout>
      <SectionHeader>Key Features & Capabilities</SectionHeader>
      <UsesCasesList
        items={[
          {
            icon: featureIcons.speed,
            title: 'Lightning-Fast Generation - Create professional designs in under 30 seconds',
          },
          {
            icon: featureIcons.ai,
            title: 'Smart AI Learning - Continuously improves based on design trends and user feedback',
          },
          {
            icon: featureIcons.customize,
            title: 'Infinite Customization - Modify colors, layouts, typography, and elements with simple commands',
          },
          {
            icon: featureIcons.export,
            title: 'Multi-Format Export - Download in PNG, SVG, PDF, or get production-ready code',
          },
        ]}
      />
    </Layout>
  );
};