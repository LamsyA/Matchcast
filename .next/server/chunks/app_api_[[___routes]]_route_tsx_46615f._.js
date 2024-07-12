module.exports = {

"[project]/app/api/[[...routes]]/route.tsx [app-route] (ecmascript)": (({ r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, g: global, __dirname, a: __turbopack_async_module__, x: __turbopack_external_require__, y: __turbopack_external_import__ }) => (() => {
"use strict";

__turbopack_async_module__(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {
/** @jsxImportSource frog/jsx */ __turbopack_esm__({
    "GET": ()=>GET,
    "POST": ()=>POST
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$jsx$2f$jsx$2d$dev$2d$runtime$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_import__("[project]/node_modules/frog/_lib/jsx/jsx-dev-runtime/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$components$2f$Button$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/frog/_lib/components/Button.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$frog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/frog/_lib/frog.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$vercel$2f$handle$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/frog/_lib/vercel/handle.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$dev$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/frog/_lib/dev/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hono$2f$node$2d$server$2f$dist$2f$serve$2d$static$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@hono/node-server/dist/serve-static.mjs [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$frog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$dev$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$frog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$dev$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
"__TURBOPACK__ecmascript__hoisting__location__";
;
;
;
;
;
const app = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$frog$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Frog"]({
    title: "MathCast",
    basePath: "/api"
});
app.frame('/', (c)=>{
    const { buttonValue, status } = c;
    return c.res({
        image: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$jsx$2f$jsx$2d$dev$2d$runtime$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])("div", {
            style: {
                alignItems: 'center',
                background: status === 'response' ? 'linear-gradient(to right, #432889, #17101F)' : 'black',
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                height: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%'
            },
            className: "bg-red-500 w-16",
            children: status === 'initial' ? 'Select your fruit!' : `Selected: ${buttonValue}`
        }, void 0, false, {
            fileName: "[project]/app/api/[[...routes]]/route.tsx",
            lineNumber: 16,
            columnNumber: 13
        }, this),
        imageOptions: {
            width: 600,
            height: 600
        },
        intents: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$jsx$2f$jsx$2d$dev$2d$runtime$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$components$2f$Button$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                value: "apple",
                children: "Apple"
            }, void 0, false, {
                fileName: "[project]/app/api/[[...routes]]/route.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$jsx$2f$jsx$2d$dev$2d$runtime$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$components$2f$Button$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                value: "banana",
                children: "Banana"
            }, void 0, false, {
                fileName: "[project]/app/api/[[...routes]]/route.tsx",
                lineNumber: 41,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$jsx$2f$jsx$2d$dev$2d$runtime$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$components$2f$Button$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["Button"], {
                value: "mango",
                children: "Mango"
            }, void 0, false, {
                fileName: "[project]/app/api/[[...routes]]/route.tsx",
                lineNumber: 42,
                columnNumber: 13
            }, this)
        ]
    });
});
(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$dev$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["devtools"])(app, {
    serveStatic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$hono$2f$node$2d$server$2f$dist$2f$serve$2d$static$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["serveStatic"]
});
const GET = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$vercel$2f$handle$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handle"])(app);
const POST = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$frog$2f$_lib$2f$vercel$2f$handle$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["handle"])(app);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);
})()),

};

//# sourceMappingURL=app_api_%5B%5B___routes%5D%5D_route_tsx_46615f._.js.map