import React from 'react'
import { Card } from './ui/card'
import { Circle } from 'lucide-react'

const TaskEmptyState = ({ filter }) => {
  return (
    <Card className='p-8 text-center border-0 bg-gradient-card shadow-custom-md'>
      
      <div className='space-y-3'>
        <Circle className='size-12 mx-auto text-muted-foreground' />
        <div>

          <h3 className='font-medium text-foreground'>
            {
              filter === 'active' ? 'No active tasks' :
              filter === 'completed' ? 'No completed tasks' :
              'No tasks available'
            }
          </h3>

          <p className='text-sm text-muted-foreground'>
            {filter === 'all' ? 'Add tasks to get started.' :
              `Direct to 'All' tab to view ${filter === "active" ? "Completed" : "Active"} tasks.`
            }
          </p>

        </div>
      </div>

    </Card>
  )
}

export default TaskEmptyState