---
title: "std::experimental::reseed"
source_path: "cpp/experimental/reseed"
header: "<experimental/random>"
category: "experimental"
---

Reseeds the [per-thread random number engine](/cpp/experimental/lib_extensions_2/#per-thread_engine) and any [std::uniform_int_distribution](/cpp/numeric/random/uniform_int_distribution/) instances used by [randint](/cpp/experimental/randint/).

## Declarations
```cpp
void reseed();
```
_(library fundamentals TS v2)_

```cpp
void reseed( std::default_random_engine::result_type value );
```
_(library fundamentals TS v2)_

## Parameters
- `value`: value of the new seed

## Example
```cpp
#include <experimental/random>
#include <iostream>
 
int main()
{
    std::experimental::reseed();
 
    std::cout << "Random 2-digit decimal numbers: ";
 
    for (auto i = 0; i != 3; ++i)
        std::cout << std::experimental::randint(10, 99) << ' ';
    std::cout << '\n';
}
```

## See also
- [randint](/cpp/experimental/randint/)
