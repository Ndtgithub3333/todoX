import React from 'react';

const Footer = ({ completedTasksCount = 0, activeTasksCount = 0 }) => {
  return (
    <>
      {completedTasksCount + activeTasksCount > 0 && (
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {completedTasksCount > 0 && (
              <>
                🎆 Good job ! You completed {completedTasksCount} tasks.
                {activeTasksCount > 0 &&
                  ` You have ${activeTasksCount} active tasks.`}
              </>
            )}

            {completedTasksCount === 0 && activeTasksCount > 0 && (
              <>🚀 You have {activeTasksCount} active tasks. Let's get to work!</>
            )}

          </p>
        </div>
      )}
    </>
  );
};

export default Footer;
