---
title: "std::priority_queue<T,Container,Compare>::top"
source_path: "cpp/container/priority_queue/top"
category: "container"
---

Returns reference to the top element in the priority queue. This element will be removed on a call to [pop()](/cpp/container/priority_queue/pop/). If default comparison function is used, the returned element is also the greatest among the elements in the queue.

## Declarations
```cpp
const_reference top() const;
```

## Return value
Reference to the top element as if obtained by a call to c.front().

## Example
```cpp
#include <iostream>
#include <queue>
 
struct Event
{
    int priority{};
    char data{' '};
 
    friend bool operator<(Event const& lhs, Event const& rhs)
    {
        return lhs.priority < rhs.priority;
    }
 
    friend std::ostream& operator<<(std::ostream& os, Event const& e)
    {
        return os << '{' << e.priority << ", '" << e.data << "'}";
    }
};
 
int main()
{
    std::priority_queue<Event> events;
 
    std::cout << "Fill the events queue:\t";
 
    for (auto const e : {Event{6,'L'}, {8,'I'}, {9,'S'}, {1,'T'}, {5,'E'}, {3,'N'}})
    {
        std::cout << e << ' ';
        events.push(e);
    }
 
    std::cout << "\nProcess events:\t\t";
 
    for (; !events.empty(); events.pop())
    {
        Event const& e = events.top();
        std::cout << e << ' ';
    }
 
    std::cout << '\n';
}
```

## See also
- [pop](/cpp/container/priority_queue/pop/)
