import { useState } from "react";

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
} from "@mui/material";

import DeleteIcon from "@mui/icons-material/Delete";

import type { Page } from "../../types";

type Props = {
  setPage: (page: Page) => void;
  useRealApi?: boolean;
};

type Status = "Concept" | "Bezig" | "Klaar";

type DocumentItem = {
  id: number;
  title: string;
  status: Status;
  date: string;
  size: string;
  type: string;
};

function DocumentsPage({
  setPage,
  useRealApi = false,
}: Props) {
  const [documents, setDocuments] = useState<DocumentItem[]>([
    {
      id: 1,
      title: "Paspoort aanvraag minderjarige",
      status: "Klaar",
      date: "13-05-2026",
      size: "2.4 MB",
      type: "PDF",
    },
    {
      id: 2,
      title: "Belastingbrief burgerzaken",
      status: "Bezig",
      date: "12-05-2026",
      size: "1.8 MB",
      type: "DOCX",
    },
    {
      id: 3,
      title: "Vergunning aanvraag horeca",
      status: "Concept",
      date: "11-05-2026",
      size: "3.1 MB",
      type: "PDF",
    },
    {
      id: 4,
      title: "Bezwaarprocedure uitleg",
      status: "Klaar",
      date: "10-05-2026",
      size: "920 KB",
      type: "TXT",
    },
    {
      id: 5,
      title: "Subsidie aanvraag formulier",
      status: "Concept",
      date: "09-05-2026",
      size: "1.2 MB",
      type: "DOCX",
    },
  ]);

  setPage = setPage;
  useRealApi = useRealApi;

  const nextStatus = (status: Status): Status => {
    if (status === "Concept") return "Bezig";
    if (status === "Bezig") return "Klaar";
    return "Concept";
  };

  const cycleStatus = (id: number) => {
    setDocuments((prev) =>
      prev.map((doc) =>
        doc.id === id
          ? {
              ...doc,
              status: nextStatus(doc.status),
            }
          : doc
      )
    );
  };

  const deleteDocument = (id: number) => {
    setDocuments((prev) =>
      prev.filter((doc) => doc.id !== id)
    );
  };

  return (
    <div className="documents-page">
      <h1>Mijn documenten</h1>

      <TableContainer
        component={Paper}
        className="documents-table"
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell><b>Titel</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Datum</b></TableCell>
              <TableCell><b>Grootte</b></TableCell>
              <TableCell><b>Type</b></TableCell>
              <TableCell><b>Acties</b></TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {documents.map((doc) => (
              <TableRow key={doc.id}>
                <TableCell>{doc.title}</TableCell>

                <TableCell>
                  <button
                    className={`status-pill ${doc.status.toLowerCase()}`}
                    onClick={() =>
                      cycleStatus(doc.id)
                    }
                  >
                    <span className="status-dot" />
                    {doc.status}
                  </button>
                </TableCell>

                <TableCell>{doc.date}</TableCell>
                <TableCell>{doc.size}</TableCell>
                <TableCell>{doc.type}</TableCell>

                <TableCell>
                  <IconButton
                    onClick={() =>
                      deleteDocument(doc.id)
                    }
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default DocumentsPage;