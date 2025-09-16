import { FilterType } from '@/lib/data';
import { Filter } from 'lucide-react';
import React from 'react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const StatsAndFilters = ({

  completedTasksCount = 0,
  activeTasksCount = 0,
  filter = 'all',
  setFilter,
}) => {
  return (
    <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:item-center">
      {/* Stats */}
      <div className="flex gap-3">
        <Badge
          variant="secondary"
          className="bg-white/50 text-accent-foreground border-infor/20"
        >
          {activeTasksCount} {FilterType.active}
        </Badge>
        <Badge
          variant="secondary"
          className="bg-white/50 text-success border-infor/20"
        >
          {completedTasksCount} {FilterType.completed}
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-2 sm:flex-row">
        {Object.keys(FilterType).map((type) => (
          <Button
            key={type}
            variant={filter === type ? 'gradient' : 'ghost'}
            size='sm'
            className="capitalize"
            onClick={() => setFilter(type)}
          >
            <Filter className='size-4' />
            {FilterType[type]}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilters;
