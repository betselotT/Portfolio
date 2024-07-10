import { Button } from "@/components/ui/button";

export default function MainHero(){
    return(
        <div className="container h-[80vh] flex items-center justify-center">
            <>
      <div className="relative overflow-hidden py-24 lg:py-32">
        <div className="relative z-10">
          <div className="container py-10 lg:py-16">
            <div className="max-w-2xl text-center mx-auto">
              <p className="">Hi there, welcome!</p>
              <div className="mt-5 max-w-2xl">
                <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
                  My name is Amanuael 
                </h1>
              </div>
              <div className="mt-5 max-w-3xl">
                <p className="text-xl text-muted-foreground">
                    I'm a software engineer with a passion for building web
                    applications. I specialize in Front-end development and
                    design. I'm currently looking for new opportunities.
                </p>
              </div>
              <div className="mt-8 gap-3 flex justify-center">
                <Button size={"lg"}>Get Resume</Button>
                <Button size={"lg"} variant={"outline"}>
                  See Projects
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
        </div>
    )
}