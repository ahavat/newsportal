import styled from 'styled-components'


export const Repositories = styled.div`
font-family: 'Open Sans', sans-serif;
font-family: 'Roboto', sans-serif;
 display: grid;
 grid-auto-rows: auto;
 box-sizing: border-box;
 grid-template-columns:  repeat(2, 1fr);
 justify-content: space-between;
 grid-column-gap: 50px;
 padding: 10px;

.content {
  margin:50px;
}
.content p{
  color: #696969;
}

.column {
  float: left;
  width: 100%;
  padding: 1rem;
}

.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  padding: 0px;
  border-radius: 5px;
  text-align:left;
  background-color: #fff;
  display: grid;
}

.card a {
  color: #40abd1;
  text-decoration: none;
  font-weight: bold;
}


@media screen and (max-width: 600px) {
  .column {
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }
}
.row {margin: 0 -5px;}

.row::after {
  content: "";
  display: table;
  clear: both;
}

img {
 border-radius:3px;
  width: 100%;
  height: 100%;
  padding: 0px;
}


.vertical-menu {
  margin-top: 20px;
  width: 200px; 
  background-color:#fff;  
  grid-column-start: 3; 
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;  
}
#top { 
  padding-top: 15px; 
}

#litlelink {
  color: #40abd1;
  font-size: 12px
  
}
.vertical-menu strong {
font-size: 14px;
}

hr {
	border: 0;
	border-top: 1px solid #dcdcdc;
}

.vertical-menu input {
  border-color: #dcdcdc;
  margin: 5px;
  padding: 10px 20px;
  width: 200px;
  box-sizing: border-box;
  border-radius: 5px;
}

.vertical-menu a {
  color: #808080; 
  display: block; 
  align-items: left;
  padding: 2px; 
  text-decoration: none;
}


`;

export const Head = styled.div`
position: relative;
font-family: sans-serif;
text-align:center;
margin-top: 90px;

h2 {
  color: #dcdcdc;
  display: inline-block;
  font-size: 19px;
}
`;