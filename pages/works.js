import { Container, Heading, SimpleGrid, Divider } from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section";
import { WorkGridItem } from "../components/grid-item";

import firstSite from "../public/ph1.jpg";
import thumbQrGen from "../public/ph1.jpg";
import thumbImp from "../public/ph1.jpg";
import thumbIstv from "../public/ph1.jpg";
import thumbLissa from "../public/ph1.jpg";
import thumbIsn from "../public/ph1.jpg";

const Works = () => (
  <Layout title="Works">
    <Container>
      <Heading as="h3" fontSize={20} mb={4}>
        Meus projetos
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.2}>
          <WorkGridItem id="qrgen" title="Qrgenerator" thumbnail={thumbQrGen}>
            Gerador de QrCode
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="istv" title="Istv" thumbnail={thumbIstv}>
            Site Oficial da ISTV - Emissora de TV
          </WorkGridItem>
        </Section>

        <Section>
          <WorkGridItem id="dralissa" title="Dra.Lissa" thumbnail={thumbLissa}>
            Site Oficial da Dra.LissaHoriguchi
          </WorkGridItem>
        </Section>
      </SimpleGrid>

      {/*<Section delay={0.2}>
        <Divider my={6} />

        <Heading as="h3" fontSize={20} mb={4}>
          Collaborations
        </Heading>
      </Section>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.3}>
          <WorkGridItem id="margelo" thumbnail={thumbMargelo} title="Margelo">
            A website of the elite app development and contracting agency based
            in Austria
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem
            id="modetokyo"
            thumbnail={thumbModeTokyo}
            title="mode.tokyo"
          >
            The mode magazine for understanding to personally enjoy Japan
          </WorkGridItem>
        </Section>
        <Section delay={0.3}>
          <WorkGridItem id="styly" thumbnail={thumbStyly} title="Styly">
            A VR Creative tools for fashion brands
          </WorkGridItem>
        </Section>
</SimpleGrid> */}
    </Container>
  </Layout>
);

export default Works;
export { getServerSideProps } from "../components/chakra";
