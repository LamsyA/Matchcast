/** @jsxImportSource frog/jsx */
import { Button, Frog, TextInput } from 'frog'
import { handle } from 'frog/next'
import { devtools } from 'frog/dev'
import { serveStatic } from 'frog/serve-static'

const app = new Frog({
    title: "MathCast",
    basePath: "/api"
});

app.frame('/', (c) => {
    const { buttonValue, status } = c
    return c.res({
        image: (
            <div style={{
                alignItems: 'center',
                background:
                    status === 'response'
                        ? 'linear-gradient(to right, #432889, #17101F)'
                        : 'black',
                backgroundSize: '100% 100%',
                display: 'flex',
                flexDirection: 'column',
                flexWrap: 'nowrap',
                height: '100%',
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
            }} className="bg-red-500 w-16">
                {status === 'initial' ? (
                    'Select your fruit!'
                ) : (
                    `Selected: ${buttonValue}`
                )}
            </div>
        ),
        imageOptions: { width: 600, height: 600 },
        intents: [
            <Button value="apple">Apple</Button>,
            <Button value="banana">Banana</Button>,
            <Button value="mango">Mango</Button>
        ]
    })
})

devtools(app, { serveStatic })

export const GET = handle(app)
export const POST = handle(app)