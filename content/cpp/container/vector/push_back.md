---
title: "std::vector<T,Allocator>::push_back"
source_path: "cpp/container/vector/push_back"
category: "container"
---

Appends the given element value to the end of the container.

## Declarations
```cpp
void push_back( const T& value );
```
_(constexpr since C++20)_

```cpp
void push_back( T&& value );
```
_(since C++11) (constexpr since C++20)_

## Parameters
- `value`: the value of the element to append

## Return value
(none)

## Notes
Some implementations throw [std::length_error](/cpp/error/length_error/) when push_back causes a reallocation that exceeds [max_size](/cpp/container/vector/max_size/) (due to an implicit call to an equivalent of [reserve](/cpp/container/vector/reserve/)([size](/cpp/container/vector/size/)() + 1)).

## Example
```cpp
#include <iomanip>
#include <iostream>
#include <string>
#include <vector>
 
int main()
{
    std::vector<std::string> letters;
 
    letters.push_back("abc");
    std::string s{"def"};
    letters.push_back(std::move(s));
 
    std::cout << "std::vector letters holds: ";
    for (auto&& e : letters)
        std::cout << std::quoted(e) << ' ';
 
    std::cout << "\nMoved-from string s holds: " << std::quoted(s) << '\n';
}
```

## See also
- [emplace_back](/cpp/container/vector/emplace_back/)
- [pop_back](/cpp/container/vector/pop_back/)
- [back_inserter](/cpp/iterator/back_inserter/)
- [std::back_insert_iterator](/cpp/iterator/back_insert_iterator/)
