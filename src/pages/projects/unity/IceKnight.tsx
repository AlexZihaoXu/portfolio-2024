import {Unity, useUnityContext} from 'react-unity-webgl';
const loader = new URL("../../../../files/ice-knight-build.loader.js", import.meta.url).href;
const data = new URL("../../../../files/ice-knight-build.data", import.meta.url).href;
const framework = new URL("../../../../files/ice-knight-build.framework.js", import.meta.url).href;
const wasm = new URL("../../../../files/ice-knight-build.wasm", import.meta.url).href;

function IceKnight() {
    const { unityProvider } = useUnityContext({
        loaderUrl:    loader,
        dataUrl:      data,
        frameworkUrl: framework,
        codeUrl:      wasm,
    });

    return (
        <div                          /* full-screen black background, centred */
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100%",
                backgroundColor: "black",
            }}
        >
            <div style={{
                padding: "16px",
                width: '100%',

            }}>
                <Unity
                    style={{
                        inset: 0,             /* top/right/bottom/left = 0 */
                        width: "100%",
                    }}
                    unityProvider={unityProvider}
                />
            </div>
        </div>
    );
}
export default IceKnight;