import React from 'react';

import { createDevTools } from 'redux-devtools';

import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
//另一种Log
import FilterableLogMonitor from 'redux-devtools-filterable-log-monitor';

const DevTools = createDevTools(
    <DockMonitor
        toggleVisibilityKey='ctrl-d'
        changePositionKey='ctrl-q'
        defaultPosition="right"
        defaultSize={0.5}>
        <LogMonitor theme='tomorrow'/>
    </DockMonitor>
);

export default DevTools;