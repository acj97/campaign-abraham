
import React, { useEffect } from 'react'
import { useMediaQuery } from "react-responsive";

export default function CampaignCard({campaign}) {
  const isMobile = useMediaQuery({
    query: "(max-width: 786px)"
  });

  function currencyFormat(num) {
    return 'Rp. ' + num.toFixed(0).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }

  return (
    <div 
      key={campaign.id}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: isMobile ? '100%' : '28%',
        borderRadius: '10px',
        minHeight: '5vh',
        boxShadow: '3px 4px 29px -12px rgba(0,0,0,0.75)',
        marginTop: '12px',
        backgroundColor: 'white'
      }}
    >
      <img 
        style={{width: '100%', borderRadius: '10px 10px 0px 0px'}}
        src={campaign.image} 
        alt={campaign.title}
      />
      <div style={{
        padding: '12px'
      }}>
        <h4>
          {campaign.title}{window.innerWidth}
        </h4>
        <div style={{
          width: '100%',
          height: '10px',
          borderRadius: '10px',
          backgroundColor: '#E8E9EC',
        }}>
          <div style={{
            width: campaign.donation_percentage * 100 > 100 ? 100 + '%' : campaign.donation_percentage * 100 + '%',
            height: '10px',
            borderRadius: '10px',
            backgroundColor: campaign.donation_percentage >= 1 ? '#FF5C8A' : '#848484'
          }}>
          </div>
        </div>
        <div style={{
          display: 'flex',
          marginTop: 'auto'
        }}>
          <div>
            Terkumpul<br/>
            <b>{currencyFormat(campaign.donation_received)}</b>
          </div>
          <div style={{
            marginLeft: 'auto',
            textAlign: 'right'
          }}>
            Sisa hari<br/>
            <b>{campaign.days_remaining}</b>
          </div>
        </div>
      </div>
    </div>
  )
}