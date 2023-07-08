import React from 'react'
import { Table, Tag } from 'antd'

const List = ({
  data
}) => {
  const speeches = data.map(({ attributes }) => attributes)
  const columns = [
    {
      width: 250,
      title: 'Author',
      dataIndex: ['author', 'full_name']
    },
    {
      width: 120,
      title: 'Speech date',
      dataIndex: 'speech_date'
    },
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title'
    },
    {
      title: 'Body',
      dataIndex: 'body',
      key: 'body'
    },
    {
      title: 'Tags',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags) => {
        if (tags != null) {
          return (
            <>
              {tags.split(' ').map((tag) => (<Tag color='orange'>{tag}</Tag>))}
            </>
          )
        }
      }
    }
  ]

  return (
    <Table
      columns={columns}
      dataSource={speeches}
    />
  )
}

export default List
