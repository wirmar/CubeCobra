import React, { useEffect, useState } from 'react';

import { Card, CardHeader, CardBody, CardFooter, Col, NavItem, NavLink, Row, Container } from 'reactstrap';

import HelpContent from 'components/HelpContent';

const HelpPage = () => {
  const pageFileName = window.location.pathname.split('/')[2];
  const [pages, setPages] = useState(null);
  const [page, setPage] = useState({});
  useEffect(() => {
    const fetchPages = async () => {
      const response = await fetch('/content/help/pages.json');
      const json = await response.json();
      const page = json.find((page) => page.fileName === pageFileName);
      setPages(json);
      setPage(page);
    };
    fetchPages();
  }, [setPages]);

  return (
    <Container>
      <Row className="mt-3">
        <Col lg="4" className="mb-3">
          <Card>
            <CardHeader>
              <h3 className="card-title">Pages</h3>
            </CardHeader>
            <CardBody>
              <ul>
                {pages &&
                  pages.map((page) => (
                    <NavItem
                      key={page.fileName}
                      className={`ml-${page.level * 3}`}
                      active={page.fileName == pageFileName}
                    >
                      <NavLink href={`/help/${page.fileName}`}>{page.name}</NavLink>
                    </NavItem>
                  ))}
              </ul>
            </CardBody>
          </Card>
        </Col>
        <Col lg="8">
          <Card>
            <CardHeader>
              <h3 className="card-title">{page.name}</h3>
              <span>{page.description}</span>
            </CardHeader>
            <CardBody>
              <HelpContent pageFileName={pageFileName} />
            </CardBody>
            <CardFooter>
              <NavLink href={`https://github.com/dekkerglen/CubeCobra/tree/master/public/content/help/${pageFileName}`}>
                Edit this page
              </NavLink>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default HelpPage;
