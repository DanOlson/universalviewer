import {Bootstrapper} from "../../Bootstrapper";
import {BootstrapParams} from "../../BootstrapParams";
import {Metric} from "./Metric";
import {Params} from "../../Params";

export interface IExtension {
    addTimestamp(uri: string): string;
    bootstrapper: Bootstrapper;
    changeLocale(locale: string): void;
    config: any;
    create(): void;
    createModules(): void;
    dependencyLoaded(index: number, dep: any): void;
    dependenciesLoaded(...args: any[]): void;
    domain: string | null;
    embedDomain: string | null;
    embedHeight: number;
    embedWidth: number;
    getAlternateLocale(): any;
    getCanvasIndexParam(): number;
    getCanvasLabels(label: string): string;
    getCurrentCanvases(): Manifesto.ICanvas[];
    getCurrentCanvasRange(): Manifesto.IRange | null;
    getDependencies(callback: (deps: any) => void): any;
    getDomain(): string;
    getEmbedDomain(): string | null;
    getExternalResources(resources?: Manifesto.IExternalResource[]): Promise<Manifesto.IExternalResource[]>;
    getIIIFShareUrl(): string;
    getLocales(): any[];
    getPagedIndices(canvasIndex?: number): number[];
    getParam(key: Params): any;
    getSequenceIndexParam(): number;
    getSerializedLocales(): string;
    getSettings(): ISettings;
    getShareUrl(): string | null;
    height(): number;
    helper: Manifold.IHelper;
    isCreated: boolean;
    isDeepLinkingEnabled(): boolean;
    isFooterPanelEnabled(): boolean;
    isFullScreen(): boolean;
    isHeaderPanelEnabled(): boolean;
    isHomeDomain: boolean;
    isLeftPanelEnabled(): boolean;
    isLightbox: boolean;
    isLoggedIn: boolean;
    isOnHomeDomain(): boolean;
    isOnlyInstance: boolean;
    isOverlayActive(): boolean;
    isReload: boolean;
    isRightPanelEnabled(): boolean;
    isSeeAlsoEnabled(): boolean;
    jsonp: boolean;
    lastCanvasIndex: number;
    loadDependencies(deps: any): void;
    locale: string;
    locales: any[];
    metric: Metric;
    mouseX: number;
    mouseY: number;
    name: string;
    redirect(uri: string): void;
    refresh(): void;
    reload(params?: BootstrapParams): void;
    resize(): void;
    resources: Manifold.ExternalResource[];
    sanitize(html: string): string;
    serializeLocales(locales: any[]): string;
    shifted: boolean;
    showMessage(message: string, acceptCallback?: any, buttonText?: string, allowClose?: boolean): void;
    tabbing: boolean;
    triggerSocket(eventName: string, eventObject?: any): void;
    updateSettings(settings: ISettings): void;
    viewCanvas(canvasIndex: number): void;
    viewCollection(collection: Manifesto.ICollection): void;
    viewManifest(manifest: Manifesto.IManifest): void;
    width(): number;
}