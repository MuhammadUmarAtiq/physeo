"use client";
import React, { useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../components/ui/alert-dialog";
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { Label } from "./ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";

import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import Link from "next/link";
import RecordTable from "./ui/recordTable";

const data = [
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
  {
    id: "m5gr84i9",
    title: "Book title",
    type: "preclinical",
    image:
      "https://yt3.googleusercontent.com/PmWvIpianhgx5AmkCkFgY3mKLkbWybJTsJUZZ6ef0BYUhns62oF-7-BQCaDB9lHHyf_D7UsZWjk=s900-c-k-c0x00ffffff-no-rj",
  },
];

export const columns = [
  {
    accessorKey: "image",
    header: "Image",
    cell: ({ row }) => (
      <Avatar>
        <AvatarImage src={row.getValue("image")}></AvatarImage>
      </Avatar>
    ),
  },
  {
    accessorKey: "title",
    header: "Title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("title")}</div>
    ),
  },

  {
    accessorKey: "type",
    header: "Type",
    cell: ({ row }) => <div className="capitalize">{row.getValue("type")}</div>,
  },

  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return (
        <div className="flex items-center gap-5 justify-end">
          <Dialog>
            <DialogTrigger asChild>
              <Link href="/book/edit">
                <Button variant="secondary">Edit</Button>
              </Link>
            </DialogTrigger>
          </Dialog>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button variant="destructive">Delete</Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction>Continue</AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      );
    },
  },
];

export function BookTable() {
  const [sorting, setSorting] = useState([]);
  const [columnFilters, setColumnFilters] = useState([]);
  const [columnVisibility, setColumnVisibility] = useState({});
  const [rowSelection, setRowSelection] = useState({});

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return <RecordTable columns={columns} data={data} />;
}
