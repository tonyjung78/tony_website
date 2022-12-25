import {
    Table,
    Tbody,
    Tr,
    Td,
    TableContainer,
    Link
} from '@chakra-ui/react'
function ContactTable(props) {
    return (
        <>
            <TableContainer>
                <Table variant='simple'>
                    <Tbody>
                        <Tr>
                            <Td/><Td/>
                        </Tr>
                        <Tr color="teal">
                            <Td>Email</Td>
                            <Td>
                                <Link href='mailto: tjung8@jhu.edu' isExternal>tjung8@jhu.edu</Link>
                            </Td>
                        </Tr>
                        <Tr color="teal">
                            <Td>LinkedIn</Td>
                            <Td>
                                <Link href='https://www.linkedin.com/in/tony-jung-2b3486199' isExternal>www.linkedin.com/in/tony-jung-2b3486199</Link>
                            </Td>
                        </Tr>
                        <Tr color="teal">
                            <Td>Instagram</Td>
                            <Td><Link href='https://instagram.com/tonyjjung?igshid=MDM4ZDc5MmU=' isExternal>@tonyjjung</Link></Td>
                        </Tr>
                        <Tr color="teal">
                            <Td>Github</Td>
                            <Td><Link href='https://github.com/tonyjung78' isExternal>tonyjung78</Link></Td>
                        </Tr>
                        <Tr color="teal">
                            <Td>League of Legends</Td>
                            <Td><Link href='https://www.op.gg/summoners/na/staplz' isExternal>staplz</Link></Td>
                        </Tr>
                    </Tbody>
                </Table>
            </TableContainer>
        </>
    );
}

export default ContactTable;