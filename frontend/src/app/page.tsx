import Image from "next/image"
import Link from "next/link"
import {Heart, Home, MessageCircle, PlusCircle, Repeat2, Search, Share2, User} from "lucide-react"
import {Button} from "@/components/ui/button"
import {ScrollArea} from "@/components/ui/scroll-area"

export default function Component() {
  return (
      <div className="flex h-screen bg-background">
        {/* Left Sidebar */}
        <div className="w-16 md:w-64 border-r flex flex-col items-center md:items-start p-4 gap-8">
          <Link href="/" className="shrink-0">
            <Image
                src="/placeholder.svg"
                alt="Threads"
                width={32}
                height={32}
                className="md:hidden"
            />
            <Image
                src="/placeholder.svg"
                alt="Threads"
                width={128}
                height={32}
                className="hidden md:block"
            />
          </Link>
          <nav className="flex flex-col gap-4 items-center md:items-start">
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Home className="h-6 w-6"/>
              <span className="hidden md:inline">Home</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Search className="h-6 w-6"/>
              <span className="hidden md:inline">Search</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <PlusCircle className="h-6 w-6"/>
              <span className="hidden md:inline">New Thread</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <Heart className="h-6 w-6"/>
              <span className="hidden md:inline">Activity</span>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-4">
              <User className="h-6 w-6"/>
              <span className="hidden md:inline">Profile</span>
            </Button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header */}
          <header className="h-16 border-b flex items-center justify-between px-4">
            <h1 className="text-xl font-semibold">Home</h1>
            <Button variant="default" size="sm">
              Log in
            </Button>
          </header>

          {/* Feed */}
          <ScrollArea className="flex-1">
            <div className="max-w-2xl mx-auto p-4 space-y-6">
              {/* Post 1 */}
              <article className="border-b pb-6">
                <div className="flex gap-4">
                  <Image
                      src="/placeholder.svg"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">brandonmdawson</span>
                        <span className="text-muted-foreground">• 8h</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <span className="sr-only">Menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="19" cy="12" r="1"/>
                          <circle cx="5" cy="12" r="1"/>
                        </svg>
                      </Button>
                    </div>
                    <p className="mt-2">
                      Most business owners start to escape something.
                      <br/>
                      We surveyed 10,000 owners between 2009 and 2019. Very few said they started to build value.
                    </p>
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Repeat2 className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4"/>
                      </Button>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
                      <span>8 likes</span>
                      <span>•</span>
                      <span>2 replies</span>
                    </div>
                  </div>
                </div>
              </article>

              {/* Post 2 */}
              <article className="border-b pb-6">
                <div className="flex gap-4">
                  <Image
                      src="/placeholder.svg"
                      alt="Avatar"
                      width={40}
                      height={40}
                      className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-semibold">ashgutermuth</span>
                        <span className="text-muted-foreground">• 22h</span>
                      </div>
                      <Button variant="ghost" size="icon">
                        <span className="sr-only">Menu</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="h-4 w-4"
                        >
                          <circle cx="12" cy="12" r="1"/>
                          <circle cx="19" cy="12" r="1"/>
                          <circle cx="5" cy="12" r="1"/>
                        </svg>
                      </Button>
                    </div>
                    <p className="mt-2">We are in the Lisbon Airport and I want all the cabbage plates 🥬</p>
                    <Image
                        src="/placeholder.svg"
                        alt="Cabbage plates"
                        width={500}
                        height={300}
                        className="mt-4 rounded-lg"
                    />
                    <div className="flex gap-4 mt-4">
                      <Button variant="ghost" size="icon">
                        <Heart className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <MessageCircle className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Repeat2 className="h-4 w-4"/>
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Share2 className="h-4 w-4"/>
                      </Button>
                    </div>
                    <div className="flex gap-2 mt-2 text-sm text-muted-foreground">
                      <span>970 likes</span>
                      <span>•</span>
                      <span>33 replies</span>
                      <span>•</span>
                      <span>7 reposts</span>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </ScrollArea>
        </div>
      </div>
  )
}