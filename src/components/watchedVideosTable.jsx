"use client";
import React, { useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import RecordTable from "./ui/recordTable";
const data = [
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
  {
    id: "m5gr84i9",
    video_title: "Section 2 - Virulence (25:54)",
    module_submodule: "Microbiology / Fundamentals",
    Course: "PreClinical",
    video_watched: "false",
    quiz_attempet: "false",
    audio_listened: "true",
    flash_cards: "true",
  },
];

export const columns = [
  {
    accessorKey: "video_title",
    header: "Video title",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("video_title")}</div>
    ),
  },
  {
    accessorKey: "module_submodule",
    header: "Module / Submodule",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("module_submodule")}</div>
    ),
  },

  {
    accessorKey: "Course",
    header: "Course",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("Course")}</div>
    ),
  },
  {
    accessorKey: "video_watched",
    header: "Video watched",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("video_watched")}</div>
    ),
  },
  {
    accessorKey: "quiz_attempet",
    header: "Quiz attempet",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("quiz_attempet")}</div>
    ),
  },
  {
    accessorKey: "audio_listened",
    header: "Audio listened",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("audio_listened")}</div>
    ),
  },
  {
    accessorKey: "flash_cards",
    header: "Flash cards downloaded",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("flash_cards")}</div>
    ),
  },
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;
      return <></>;
    },
  },
];

const WatchedVideosTable = () => {
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
  return (
    <div>
      <RecordTable columns={columns} data={data}></RecordTable>
    </div>
  );
};

export default WatchedVideosTable;
