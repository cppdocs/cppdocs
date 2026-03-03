---
title: "std::set_new_handler"
source_path: "cpp/memory/new/set_new_handler"
header: "<new>"
category: "memory"
since: "C++11"
---

Makes new_p the new global new-handler function and returns the previously installed new-handler.

## Declarations
```cpp
std::new_handler set_new_handler( std::new_handler new_p ) throw();
```
_(until C++11)_

```cpp
std::new_handler set_new_handler( std::new_handler new_p ) noexcept;
```
_(since C++11)_

## Parameters
- `new_p`: pointer to function of type std::new_handler, or null pointer

## Return value
The previously-installed new handler, or a null pointer value if none was installed.

## Example
```cpp
#include <iostream>
#include <new>
 
void handler()
{
    std::cout << "Memory allocation failed, terminating\n";
    std::set_new_handler(nullptr);
}
 
int main()
{
    std::set_new_handler(handler);
    try
    {
        while (true)
        {
            new int[1000'000'000ul]();
        }
    }
    catch (const std::bad_alloc& e)
    {
        std::cout << e.what() << '\n';
    }
}
```

## See also
- [operator newoperator new[]](/cpp/memory/new/operator_new/)
- [get_new_handler](/cpp/memory/new/get_new_handler/)
- [new_handler](/cpp/memory/new/new_handler/)
- [bad_alloc](/cpp/memory/new/bad_alloc/)
