import React, {useEffect} from "react";
import axios from 'axios';
import { useMediaQuery } from "react-responsive";
import CampaignCard from '../components/CampaignCard';

export default function ProductList() {
  const [campaigns, setCampaigns] = React.useState([])
  
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  useEffect(() => {
    getCampaigns()
  }, [])

  function getCampaigns() {
    axios.get('https://olahproxy.herokuapp.com/https://storage.googleapis.com/southern-waters-642.appspot.com/fe_code_challenge/campaign.json')
    .then((response) => {
      setCampaigns(response.data.data)
    })
  }

  function sortAsc(property) {
    let arr = campaigns.sort((a, b) => (a[property] > b[property]) ? 1 : -1)
    console.log(arr)
    setCampaigns([...arr])
  }

  return (
    <div style={{
      background: 'rgba(211,211,211, 0.2)',
      padding: '24px'
    }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: isMobile ? 'column' : 'row'
        }}
      >
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <img
            src="https://assets.kitabisa.cc/images/logos/logogram__ktbs_white.png"
            alt="logo"
          />
          <h2 style={{
            margin: '0px 0px 0px 12px'
          }}>Kitabisa.com</h2>
        </div>
        <div style={{
          display: 'flex', 
          marginLeft: 'auto',
          marginTop: isMobile ? '12px' : '0px'
        }}>
          <button 
            style={{
              height: 'fit-content',
              backgroundColor: '#4CAF50',
              border: 'none',
              color: 'white',
              padding: '16px 16px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '12px',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={() => {
              sortAsc('donation_target')
            }}
          >
            <b>Sort by Donation Goal ASC</b>
          </button>
          <button 
            style={{
              marginLeft: '12px',
              height: 'fit-content',
              backgroundColor: '#4CAF50',
              border: 'none',
              color: 'white',
              padding: '16px 16px',
              textAlign: 'center',
              textDecoration: 'none',
              display: 'inline-block',
              fontSize: '12px',
              borderRadius: '10px',
              cursor: 'pointer'
            }}
            onClick={() => {
              sortAsc('days_remaining')
            }}
          >
            <b>Sort by Days Left ASC</b>
          </button>
        </div>
      </div>
      <div style={{
        marginTop: '12px',
        display: 'flex',
        gap: '12px',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly'
      }}>
        {
          campaigns.map((campaign) => {
            return(
              <CampaignCard key={campaign.id} campaign={campaign} />
            )
          })
        }
      </div>
    </div>
  )
}