import React, {useState, useEffect} from "react";
import {Table} from "antd";

function RecommendTable({recommendations}) {
  const columns = [
    {
      title: '股票列表',
      dataIndex: 'stocks',
      key: 'stocks'
    },
    {
      title: '推荐值',
      dataIndex: 'rate',
      key: 'rate'
    }
  ]

  const [source, setSource] = useState([{}])

  useEffect(() => {
    let tempSource = []
    for (let i = 0; i < recommendations.length; i++) {
      tempSource.push({
        stocks: recommendations[i][0],
        rate: recommendations[i][1]
      })
    }
    setSource(tempSource)
  }, [recommendations])

  return <Table dataSource={source} columns={columns}/>
}

export default RecommendTable
