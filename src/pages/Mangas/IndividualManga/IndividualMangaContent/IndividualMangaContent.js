import { Container } from "../../../../containers/Container";
import { Title } from "../../../../components/generals/title/Title";
import { Text } from "../../../../components/generals/text/Text";

function IndividualMangaContent({ data, genres }) {
    return (
        <>
            <Container animeheader>
                <Container css={{ width: '85%' }}>
                    <Title color={'white'} size={'42'} nowrap fontWeight={'lg'} > {data.title} </Title>
                    <Text color={'white'} nowrap css={{ marginTop: 5, }}>{genres}</Text>
                </Container>
            </Container>
            <Container borderBottom css={{
                paddingTop: 225,
                paddingBottom: 15,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                '@iPad': { padding: '30px 0 15px 0' },
                '@mobile': { display: 'none' },
            }}>
                <Text nowrap> Anitory {'>'} Mangas {'>'} {data.title} </Text>
                <Text color={'red'} fontWeight={'lg'}> {data.year} </Text>
            </Container>

            <Container>
                <Title css={{ marginTop: 15, '@mobile': { textAlign: 'center' } }}> Synopsis </Title>
                <Text size={'14'} css={{ marginTop: 15, '@mobile': { fontSize: 12, textAlign: 'center', padding: '0px 20px' } }}> {data.synopsis} </Text>
            </Container>

            {data.background !== null && (
                <Container>
                    <Title css={{ marginTop: 15, '@mobile': { textAlign: 'center' } }}> Background </Title>
                    <Text size={'14'} css={{ marginTop: 15, '@mobile': { fontSize: 12, textAlign: 'center', padding: '0px 20px' } }}> {data.background} </Text>
                </Container>
            )
            }
        </>
    );
}

export default IndividualMangaContent;