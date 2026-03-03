---
title: "std::priority_queue<T,Container,Compare>::push"
source_path: "cpp/container/priority_queue/push"
category: "container"
since: "C++11"
---

Pushes the given element value to the priority queue.

## Declarations
```cpp
void push( const value_type& value );
```

```cpp
void push( value_type&& value );
```
_(since C++11)_

## Parameters
- `value`: the value of the element to push

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
- [pop](/cpp/container/priority_queue/pop/)
