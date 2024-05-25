import {
  SelectValue,
  SelectTrigger,
  SelectItem,
  SelectContent,
  Select,
} from "@/components/ui/select";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import React from "react";

export default function TextTovideos() {
  const [open, setOpen] = React.useState(true);

  const handleToggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <div className="relative">
      <Button onClick={handleToggleDrawer} className="fixed top-4 left-4 z-50">
        {open ? "" : <MenuIconcross/>}
      </Button>
      <div className="grid min-h-screen w-full lg:grid-cols-[300px_1fr] ">
        <Drawer
          open={open}
          onOpenChange={setOpen}
          direction="left"
          modal={false}
        >
         
            <div className="flex h-full max-h-screen flex-col gap-2 p-4">
              <DrawerContent className="h-full w-[400px]">
                <DrawerHeader className="text-left flex justify-between">
                  <DrawerTitle>
                    <div className="flex h-[60px] items-center border-b">
                      <h2 className="text-lg font-semibold">Video Creator</h2>
                    </div>
                  </DrawerTitle>
                  <DrawerClose asChild>
                    <Button variant="outline"><MenuIconshow/></Button>
                  </DrawerClose>
                </DrawerHeader>
                <div className="flex-1 overflow-auto">
                  <div className="grid gap-4">
                    <div>
                      <h3 className="mb-2 text-sm font-medium  first-line:">
                        Dimensions
                      </h3>
                      <div className="grid grid-cols-2 gap-2  ">
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="1920x1080">1920x1080</SelectItem>
                            <SelectItem value="1280x720">1280x720</SelectItem>
                            <SelectItem value="640x360">640x360</SelectItem>
                          </SelectContent>
                        </Select>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                          <SelectContent className="bg-white">
                            <SelectItem value="landscape">Landscape</SelectItem>
                            <SelectItem value="portrait">Portrait</SelectItem>
                            <SelectItem value="youtubeshort">
                              youtube short
                            </SelectItem>
                            <SelectItem value="tiktokShort">
                              tiktok short
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">
                        Background Music
                      </h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="energatic">Energatic</SelectItem>
                          <SelectItem value="motivational">
                            Motivational
                          </SelectItem>
                          <SelectItem value="relaxing">Relaxing</SelectItem>
                          <SelectItem value="none">None</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Voice</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="child">Child</SelectItem>
                          <SelectItem value="male">Male</SelectItem>
                          <SelectItem value="female">Female</SelectItem>
                          <SelectItem value="oldman">Old Man</SelectItem>
                          <SelectItem value="Old Woman">Old Woman</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Language</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="en">English</SelectItem>
                          <SelectItem value="es">Spanish</SelectItem>
                          <SelectItem value="fr">French</SelectItem>
                          <SelectItem value="hi">Hindi</SelectItem>
                          <SelectItem value="ur">Urdu</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Scene Type</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="office">Cartoon</SelectItem>
                          <SelectItem value="nature">Nature</SelectItem>
                          <SelectItem value="city">Realistic</SelectItem>
                          <SelectItem value="painting">Painting</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Caption</h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="office">None</SelectItem>
                          <SelectItem value="nature">Urdu</SelectItem>
                          <SelectItem value="city">Hindi</SelectItem>
                          <SelectItem value="painting">English</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <h3 className="mb-2 text-sm font-medium">Logo</h3>
                      <input
                        type="file"
                        accept="image/*"
                        className="w-full p-2 border border-gray-300 rounded-md"
                      />
                      <h3 className="mb-2 text-sm font-medium mt-2">
                        Logo Position
                      </h3>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select position" />
                        </SelectTrigger>
                        <SelectContent className="bg-white">
                          <SelectItem value="top-left">Top Left</SelectItem>
                          <SelectItem value="top-right">Top Right</SelectItem>
                          <SelectItem value="bottom-left">
                            Bottom Left
                          </SelectItem>
                          <SelectItem value="bottom-right">
                            Bottom Right
                          </SelectItem>
                          <SelectItem value="center">Center</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
                <DrawerFooter className="pt-2">
                  <DrawerClose asChild>
                    <Button variant="outline">History</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </div>
          
        </Drawer>
        <div className="flex flex-col">
          <main className="flex-1 p-4 md:p-6">
            <div className="mx-auto max-w-2xl">
              <div className="mb-6">
                <Textarea
                  className="h-[300px] w-full resize-none rounded-lg border border-gray-300 p-4 text-sm dark:border-gray-700"
                  placeholder="Write your video script here..."
                />
              </div>
              <div className="flex justify-end gap-2">
                <Button variant="outline">Inhenice</Button>
                <Button>Generatate Video</Button>
              </div>
            </div>
          </main>
        </div>
      </div>{" "}
    </div>
  );
}


function MenuIconshow() {
  return(
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
    >
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  ) }
  function MenuIconcross( ) {
    return (
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
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

