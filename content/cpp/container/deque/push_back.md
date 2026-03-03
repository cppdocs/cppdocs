---
title: "std::deque<T,Allocator>::push_back"
source_path: "cpp/container/deque/push_back"
category: "container"
since: "C++11"
---

Appends the given element value to the end of the container.

## Declarations
```cpp
void push_back( const T& value );
```

```cpp
void push_back( T&& value );
```
_(since C++11)_

## Parameters
- `value`: the value of the element to append

## Return value
(none)

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <deque>
 
int main()
{
    std::deque<std::string> letters;
 
    letters.push_back("abc");
    std::string s{"def"};
    letters.push_back(std::move(s));
 
    std::cout << "std::deque letters holds: ";
    for (auto&& e : letters)
        std::cout << std::quoted(e) << ' ';
 
    std::cout << "\nMoved-from string s holds: " << std::quoted(s) << '\n';
}
```

## See also
- [emplace_back](/cpp/container/deque/emplace_back/)
- [push_front](/cpp/container/deque/push_front/)
- [pop_back](/cpp/container/deque/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
