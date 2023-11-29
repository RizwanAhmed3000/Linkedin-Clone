import styled from "styled-components"

function Header() {
    return (
        <Container>
            <Content>
                <Logo>
                    <a href="/home">
                        <img src="/images/home-logo.svg" alt="" />
                    </a>
                </Logo>
                <Search>
                    <div>
                        <input type="text" placeholder="Search" />
                    </div>
                    <SearchIcon>
                        <img src="/images/search-icon.svg" alt="" />
                    </SearchIcon>
                </Search>
            </Content>
        </Container>
    )
}

const Container = styled.div`
    background-color: white;    
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
    left: 0;
    top: 0;
    width: 100vw;
    padding: 0 24px;
    position: fixed;
    z-index: 100;
`
const Content = styled.div`
    display: flex;
    align-items: center; 
    margin: 0 auto;
    min-height: 100%;
    max-width: 1128px;
`

const Logo = styled.span`
    margin-right: 8px;
    font-size: 0px;
`

const Search = styled.div`
    
`
const SearchIcon = styled.div`
    
`



export default Header