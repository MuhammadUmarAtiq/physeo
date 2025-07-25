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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  ArrowUpToLine,
  Car,
  ChevronDown,
  FileSliders,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import Link from "next/link";
import DatePicker from "../../../components/DatePicker";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      {/* <div className="bg-[#eaeaea59] h-[70%] relative top-60"> </div> */}
      <div className="">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">Edit User</h2>
          <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
            <div className=" w-full lg:w-[25%]">
              <div className="flex items-center justify-between space-y-2 pb-7">
                <Card className=" py-6 pl-6 flex w-full items-center gap-2">
                  <FileSliders size={18} />
                  <h2 className="font-bold text-lg">User</h2>
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
                        <Label htmlFor="name">Username</Label>
                        <Input
                          id="title"
                          className="focus-visible:ring-0"
                          placeholder="Username"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Email</Label>
                        <Input
                          id="title"
                          className="focus-visible:ring-0"
                          placeholder="Email"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Password</Label>
                        <Input
                          id="title"
                          className="focus-visible:ring-0"
                          placeholder="Password"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">College</Label>
                        <Input
                          id="title"
                          className="focus-visible:ring-0"
                          placeholder="College"
                        />
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="name">Phone</Label>
                        <Input
                          id="title"
                          className="focus-visible:ring-0"
                          placeholder="Phone"
                        />
                      </div>
                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="maxHeight">Plans</Label>

                        <Select>
                          <SelectTrigger className="">
                            <SelectValue placeholder="Plans" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="clinical">Clinical</SelectItem>
                            <SelectItem value="preclinincal">
                              Preclinical
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="flex flex-col space-y-1.5">
                        <Label htmlFor="maxHeight">Role</Label>

                        <Select>
                          <SelectTrigger className="outline-none">
                            <SelectValue placeholder="Role" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="user">User</SelectItem>
                            <SelectItem value="admin">Admin</SelectItem>
                            <SelectItem value="super-user">
                              Super-admin
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div className="flex flex-col md:flex-row gap-3 md:gap-10">
                        <div className="flex flex-col items-right gap-1 ">
                          <Label htmlFor="maxHeight">Start Date</Label>
                          <DatePicker />
                        </div>
                        <div className="flex flex-col items-right gap-1">
                          <Label htmlFor="maxHeight">End Date</Label>
                          <DatePicker />
                        </div>
                      </div>
                    </div>
                  </form>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/user">
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
