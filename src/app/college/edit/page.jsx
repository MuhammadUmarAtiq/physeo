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
import { Separator } from "../../../components/ui/separator";
import { Switch } from "../../../components/ui/switch";
import Link from "next/link";
import DatePicker from "../../../components/DatePicker";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      {/* <div className="bg-[#eaeaea59] h-[60%] relative top-60"> </div> */}
      <div className="">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">Edit College</h2>
          <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
            <div className=" w-full lg:w-[25%]">
              <div className="flex items-center justify-between space-y-2 pb-7">
                <Card className=" py-6 pl-6 flex w-full items-center gap-2">
                  <FileSliders size={18} />
                  <h2 className="font-bold text-lg">College</h2>
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
                      <div className="grid gap-4 ">
                        <div className="grid gap-4">
                          <div className="flex flex-col items-right gap-1">
                            <Label htmlFor="maxHeight">College Name *</Label>
                            <Input
                              id="email"
                              defaultValue=""
                              className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                            />
                          </div>
                          <div className="flex flex-col items-right gap-1">
                            <Label htmlFor="maxHeight">Email Suffix *</Label>
                            <Input
                              id="firstName"
                              defaultValue=""
                              className="col-span-2 h-9 focus-visible:outline-none focus-visible:ring-0"
                            />
                          </div>

                          <div className="flex gap-10">
                            <div className="flex flex-col items-right gap-1">
                              <Label htmlFor="maxHeight">Calendars</Label>
                              <DatePicker />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/college">
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
