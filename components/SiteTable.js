import React from "react";
import NextLink from "next/link";
import { Box, Link } from "@chakra-ui/core";
import { parseISO, format } from "date-fns";

import { Table, Tr, Th, Td } from "./Table";

const SiteTable = ({ sites }) => {
  return (
    <Box overflowX="scroll">
      <Table w="full">
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Site Link</Th>
            <Th>Feedback Link</Th>
            <Th>Date Added</Th>
            <Th width="50px">{""}</Th>
          </Tr>
        </thead>
        <tbody>
          {sites.map((site) => (
            <Box as="tr" key={site.id}>
              <Td fontWeight="medium">{site.name}</Td>
              <Td>
                <Link href={site.url} isExternal>
                  {site.url}
                </Link>
              </Td>
              <Td>
                <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                  <Link color="blue.500" fontWeight="medium">
                    View Feedback
                  </Link>
                </NextLink>
              </Td>
              <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
            </Box>
          ))}
        </tbody>
      </Table>
    </Box>
  );
};

export default SiteTable;
