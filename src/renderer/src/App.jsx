import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"



function App() {
  return (
    <div className="container mx-auto p-8 min-h-screen flex flex-col justify-center items-center bg-background text-foreground">
      <Card className="w-[450px] rounded-sm ">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Electron + shadcn/ui</CardTitle>
          <CardDescription>This is your base template</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground">
            You can start building your Electron application using this template.
            It includes shadcn/ui components and is set up with React.js for easy development.
          </p>
          <div>
          <ol>
            <li>
              <a href="https://vitejs.dev/guide/">React Vite</a>
            </li>
            <li>
              <a href="https://electron-vite.org/guide/">Electron Vite Guide</a>
            </li>
          </ol>
          </div>
          
        </CardContent>
        <CardFooter>
          <Button className="w-full">Get Started</Button>
        </CardFooter>
      </Card>
    </div>
  )
}

export default App
