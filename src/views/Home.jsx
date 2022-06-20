import React from "react";
import { Button } from "antd";


function Home() {

// Display 👇 

  return (

<div style={{height: "100%"}}>

  <div style={{width: "50%", marginLeft: "25%", marginRight: "25%", marginTop: 25 }}>

    <div>
      <h1><b>
        Welcome to Journalism 3.0
      </b></h1>
    </div>
    <div style={{textAlign: "justify"}}>
      <h4>Good Morning News is the world's first decentralized
         news organization. Leveraging the power of smart contracts, we publish the news directly
        on the blockchain and deliver it straight to your wallet.</h4>
<br></br>
      <p><i>Good Morning News isn't just reviving traditional journalism; we are reinventing the concept 
	  of journalism and what it means to meaningfully engage with our audience and contributors.
	  In addition to publishing, Good Morning News has created an open-source framework within which anyone can create 
	  sustainable, immutable, censorship-resistant journalism.</i>
	  </p>
    </div>
    <i style={{fontSize: "5em"}}>🗞️</i>
    <div>
      <h1><b>How it Works</b></h1>
      <h4 style={{textAlign: "justify"}}>Journalists from around the world submit their work to the publication. Every day, an editorial 
	  vote is held. Subscribers, anyone who holds one of the publication’s NFTs, gather and vote for the day's story. 
	  The journalist whose story is chosen is awarded in the organization's native token PAPER.</h4>
<br></br>
      <p style={{textAlign: "justify"}}><i>Once the votes are counted and the editors approve the copy for publication, the designers go 
	  to work laying out the next day’s issue. Once complete, the design is deployed to the blockchain and our organization's 
	  NFT updates with the latest story. For every issue of Good Morning News sold, the organization uses half of the proceeds 
	  to buy back the PAPER token and the other half goes towards our PAPER/MATIC liquidity pool.</i></p>
    <b style={{fontSize: "5em"}}>📰</b>
    </div>
    </div>

</div>);}

export default Home;
