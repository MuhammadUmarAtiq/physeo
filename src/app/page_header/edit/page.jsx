import React from "react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import {
  ArrowUpToLine,
  Car,
  ChevronDown,
  FileSliders,
  Upload,
} from "lucide-react";
import Link from "next/link";
import Page from "../../../components/ui/page";
import { Separator } from "../../../components/ui/separator";

const page = () => {
  return (
    <>
      {/* <div className="bg-[#eaeaea59] h-[80%] relative top-60"> </div> */}
      <div className="">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">Update page header</h2>
          <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
            <div className=" w-full lg:w-[25%]">
              <div className="flex items-center justify-between space-y-2 pb-7">
                <Card className=" py-6 pl-6 flex w-full items-center gap-2">
                  <FileSliders size={18} />
                  <h2 className="font-bold text-lg">Page header</h2>
                </Card>
              </div>
            </div>
            <div className="w-full lg:w-[75%]">
              <Card>
                <CardHeader>
                  <CardTitle>Create project</CardTitle>
                </CardHeader>
                <Separator />
                <CardContent className="pt-5">
                  <form>
                    <div className="grid w-full items-center gap-4">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Title</Label>
                        <Input
                          className="focus-visible:ring-0"
                          id="title"
                          placeholder="Title"
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-4 mt-3">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="slug">Slug</Label>
                        <Input
                          className="focus-visible:ring-0"
                          id="slug"
                          placeholder="Slug"
                        />
                      </div>
                    </div>
                    <div className="grid w-full items-center gap-4 mt-3">
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="Category">Content</Label>
                        <Input
                          className="focus-visible:ring-0"
                          id="Category"
                          placeholder="Content"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mt-3">
                        <Label>Desktop Banner</Label>
                      </div>
                      <div>
                        <div className="flex gap-2.5 lg:gap-5">
                          <div className="file-upload mt-[1px]">
                            <div className="file-upload-button">
                              <label
                                htmlFor="fileInput"
                                className="flex justify-center gap-1 items-center px-4 cursor-pointer"
                              >
                                <Upload size={15} /> Upload
                              </label>
                            </div>
                            <input
                              type="file"
                              id="fileInput"
                              className="hidden"
                            />
                          </div>
                          <Input
                            type="text"
                            placeholder="Or paste a link here"
                            className="focus-visible:ring-0"
                          ></Input>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="mt-3">
                        <Label>Mobile Banner</Label>
                      </div>
                      <div>
                        <div className="flex gap-2.5 lg:gap-5">
                          <div className="file-upload mt-[1px]">
                            <div className="file-upload-button">
                              <label
                                htmlFor="fileInput"
                                className="flex justify-center gap-1 items-center px-4 cursor-pointer"
                              >
                                <Upload size={15} /> Upload
                              </label>
                            </div>
                            <input
                              type="file"
                              id="fileInput"
                              className="hidden"
                            />
                          </div>
                          <Input
                            type="text"
                            placeholder="Or paste a link here"
                            className="focus-visible:ring-0"
                          ></Input>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/page_header">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button>Update</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </Page>
      </div>
    </>
  );
};

export default page;
