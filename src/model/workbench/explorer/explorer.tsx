import React from 'react';
import { IActionBarItemProps } from 'mo/components/actionBar';
import type { UniqueId } from 'mo/common/types';

export enum ExplorerEvent {
    onClick = 'explorer.onClick',
    onPanelToolbarClick = 'explorer.onPanelToolbarClick',
    onCollapseChange = 'explorer.onCollapseChange',
    onRemovePanel = 'explorer.onRemovePanel',
    onCollapseAllFolders = 'explorer.onCollapseAllFolders',
}

export type RenderFunctionProps = (props) => React.ReactNode;
export interface IExplorerPanelItem {
    /**
     * It must be unique in the Explorer Panel Data
     */
    id: UniqueId;
    /**
     * @requires true
     * explorer panel's title
     */
    name: string;
    /**
     * specify panel order
     * the bigger the number is ranked previous
     */
    sortIndex?: number;
    className?: string;
    toolbar?: IActionBarItemProps[];
    renderPanel?: RenderFunctionProps;
    /**
     * whether hidden in explorer
     */
    hidden?: boolean;

    [key: string]: any;
}
export interface IExplorer {
    data: IExplorerPanelItem[];
    headerToolBar?: IActionBarItemProps;
    expandedPanels?: React.Key[];
}

export class IExplorerModel implements IExplorer {
    public data: IExplorerPanelItem[];
    public headerToolBar?: IActionBarItemProps;
    public expandedPanels?: React.Key[];

    constructor(
        data: IExplorerPanelItem[] = [],
        headerToolBar?: IActionBarItemProps,
        expandedPanels?: React.Key[]
    ) {
        this.data = data;
        this.headerToolBar = headerToolBar;
        this.expandedPanels = expandedPanels;
    }
}
