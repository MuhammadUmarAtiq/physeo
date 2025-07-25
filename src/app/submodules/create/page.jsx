import React from "react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
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
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../../components/ui/select";
import {
  ArrowUpToLine,
  Car,
  ChevronDown,
  FileSliders,
  Landmark,
  Upload,
} from "lucide-react";
import { Separator } from "../../../components/ui/separator";
import Page from "../../../components/ui/page";

const page = () => {
  return (
    <>
      {/* <div className="bg-[#eaeaea59] h-[70%] relative top-60"> </div> */}
      <div className="">
        <Page>
          <h2 className="text-[1.875rem] font-bold pt-7">Create a Submodule</h2>
          <div className="flex flex-col lg:flex-row mt-7 lg:gap-8 ">
            <div className=" w-full lg:w-[25%]">
              <div className="flex items-center justify-between space-y-2 pb-7">
                <Card className=" py-6 pl-6 flex w-full items-center gap-2">
                  <FileSliders size={18} />
                  <h2 className="font-bold text-lg">SUBMODULE</h2>
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
                          id="title"
                          placeholder="Title"
                          className="focus-visible:ring-0"
                        />
                      </div>
                    </div>
                  </form>
                  <div>
                    <div className="mt-3">
                      <Label>Icon</Label>
                    </div>
                    <div className="flex gap-2.5 lg:gap-5">
                      <div className="file-upload mt-[1px]">
                        <div className="file-upload-button">
                          <label
                            htmlFor="fileInput"
                            className="flex justify-center gap-1 items-center px-4 cursor-pointer"
                          >
                            <Upload size={15} />
                            Upload
                          </label>
                        </div>
                        <input type="file" id="fileInput" className="hidden" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Or paste a link here"
                        className="focus-visible:ring-0"
                      ></Input>
                    </div>
                  </div>
                  <div>
                    <div className="mt-3">
                      <Label>Flash Card</Label>
                    </div>
                    <div className="flex gap-2.5 lg:gap-5">
                      <div className="file-upload mt-[1px]">
                        <div className="file-upload-button">
                          <label
                            htmlFor="fileInput"
                            className="flex justify-center gap-1 items-center px-4 cursor-pointer"
                          >
                            <Upload size={15} />
                            Upload
                          </label>
                        </div>
                        <input type="file" id="fileInput" className="hidden" />
                      </div>
                      <Input
                        type="text"
                        placeholder="Or paste a link here"
                        className="focus-visible:ring-0"
                      ></Input>
                    </div>
                  </div>
                  <div className="mt-3">
                    <Label>Modules</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectItem value="anatomy">Anatomy</SelectItem>
                          <SelectItem value="biochemistry">
                            Biochemistry
                          </SelectItem>
                          <SelectItem value="biostatistics">
                            Biostatistics
                          </SelectItem>
                          <SelectItem value="embryology">Embryology</SelectItem>
                          <SelectItem value="immunology">Immunology</SelectItem>
                          <SelectItem value="microbiology">
                            Microbiology
                          </SelectItem>
                          <SelectItem value="pathology">Pathology</SelectItem>
                          <SelectItem value="pharmacology">
                            Pharmacology
                          </SelectItem>
                          <SelectItem value="physiology">physiology</SelectItem>
                          <SelectItem value="Public_health_science">
                            Public Health Sciences
                          </SelectItem>
                          <SelectItem value="psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="biostatistics">
                            Biostatistics
                          </SelectItem>
                          <SelectItem value="differential_diagnoses">
                            Differential Diagnoses
                          </SelectItem>
                          <SelectItem value="emergency_medicine">
                            Emergency Medicine
                          </SelectItem>
                          <SelectItem value="internal_medicine">
                            Internal Medicine
                          </SelectItem>
                          <SelectItem value="immunology">Immunology</SelectItem>
                          <SelectItem value="neurology">Neurology</SelectItem>
                          <SelectItem value="OBGYN">OBGYN</SelectItem>
                          <SelectItem value="pediatrics">Pediatrics</SelectItem>
                          <SelectItem value="psychiatry">Psychiatry</SelectItem>
                          <SelectItem value="Public_health_science">
                            Public Health Sciences
                          </SelectItem>
                          <SelectItem value="surgery">Surgery</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Link href="/submodules">
                    <Button variant="outline">Cancel</Button>
                  </Link>
                  <Button>Create</Button>
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
