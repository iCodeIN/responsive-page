/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface AppRoot {
    }
    interface DemoViewer {
        "url"?: string;
    }
    interface HomePage {
    }
    interface PatternPage {
        "pattern"?: string;
    }
}
declare global {
    interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {
    }
    var HTMLAppRootElement: {
        prototype: HTMLAppRootElement;
        new (): HTMLAppRootElement;
    };
    interface HTMLDemoViewerElement extends Components.DemoViewer, HTMLStencilElement {
    }
    var HTMLDemoViewerElement: {
        prototype: HTMLDemoViewerElement;
        new (): HTMLDemoViewerElement;
    };
    interface HTMLHomePageElement extends Components.HomePage, HTMLStencilElement {
    }
    var HTMLHomePageElement: {
        prototype: HTMLHomePageElement;
        new (): HTMLHomePageElement;
    };
    interface HTMLPatternPageElement extends Components.PatternPage, HTMLStencilElement {
    }
    var HTMLPatternPageElement: {
        prototype: HTMLPatternPageElement;
        new (): HTMLPatternPageElement;
    };
    interface HTMLElementTagNameMap {
        "app-root": HTMLAppRootElement;
        "demo-viewer": HTMLDemoViewerElement;
        "home-page": HTMLHomePageElement;
        "pattern-page": HTMLPatternPageElement;
    }
}
declare namespace LocalJSX {
    interface AppRoot {
    }
    interface DemoViewer {
        "url"?: string;
    }
    interface HomePage {
    }
    interface PatternPage {
        "pattern"?: string;
    }
    interface IntrinsicElements {
        "app-root": AppRoot;
        "demo-viewer": DemoViewer;
        "home-page": HomePage;
        "pattern-page": PatternPage;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "app-root": LocalJSX.AppRoot & JSXBase.HTMLAttributes<HTMLAppRootElement>;
            "demo-viewer": LocalJSX.DemoViewer & JSXBase.HTMLAttributes<HTMLDemoViewerElement>;
            "home-page": LocalJSX.HomePage & JSXBase.HTMLAttributes<HTMLHomePageElement>;
            "pattern-page": LocalJSX.PatternPage & JSXBase.HTMLAttributes<HTMLPatternPageElement>;
        }
    }
}
