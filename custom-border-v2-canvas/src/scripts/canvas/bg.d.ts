export declare class bgGrid {
    private width;
    private height;
    private stage;
    private color;
    private bgColor;
    private config;
    private firstSectorWidth;
    private firstSectorHeight;
    constructor();
    private createAndSetGridLayer;
    private auraMove;
    private static getMouseAura;
    private createGrid;
    private createSector;
    private createFirstSector;
    private createPlus;
    private setPlusPosition;
    private createLine;
    createBgLayer(): import("konva/lib/Layer").Layer;
    getWidth(): any;
    getHeight(): any;
}
