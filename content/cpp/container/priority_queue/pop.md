---
title: "std::priority_queue<T,Container,Compare>::pop"
source_path: "cpp/container/priority_queue/pop"
category: "container"
---

Removes the top element from the priority queue. Effectively calls [std::pop_heap](/cpp/algorithm/pop_heap/)(c.begin(), c.end(), comp); c.pop_back();.

## Declarations
```cpp
void pop();
```

## Return value
(none)

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
- [emplace](/cpp/container/priority_queue/emplace/)
- [push](/cpp/container/priority_queue/push/)
- [top](/cpp/container/priority_queue/top/)
