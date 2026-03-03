---
title: "std::basic_string<CharT,Traits,Allocator>::resize_and_overwrite"
source_path: "cpp/string/basic_string/resize_and_overwrite"
category: "string"
since: "C++23"
---

Resizes the string to contain at most count characters, using the user-provided operation op to modify the possibly indeterminate contents and set the length. This avoids the cost of initializing a suitably-sized [std::string](/cpp/string/basic_string/) when it is intended to be used as a char array to be populated by, e.g., a C API call.

## Declarations
```cpp
template< class Operation >
constexpr void resize_and_overwrite( size_type count, Operation op );
```
_(since C++23)_

## Parameters
- `count`: the maximal possible new size of the string
- `op`: the function object used for setting the new contents of the string

## Notes
resize_and_overwrite invalidates all iterators, pointers, and references into *this, regardless whether reallocation occurs. Implementations may assume that the contents of the string are not aliased after the call to resize_and_overwrite.

## Example
```cpp
#include <algorithm>
#include <cassert>
#include <cstddef>
#include <cstring>
#include <iomanip>
#include <iostream>
#include <string>
#include <string_view>
static_assert(__cpp_lib_string_resize_and_overwrite);
 
constexpr std::string_view fruits[]{"apple", "banana", "coconut", "date", "elderberry"};
 
int main()
{
    // A simple case, append only fruits[0]. The string size will be increased.
    std::string s{"Food: "};
    s.resize_and_overwrite(16, [sz = s.size()](char* buf, std::size_t buf_size) noexcept
    {
        const auto to_copy = std::min(buf_size - sz, fruits[0].size());
        std::memcpy(buf + sz, fruits[0].data(), to_copy);
        return sz + to_copy;
    });
    std::cout << "1. " << std::quoted(s) << '\n';
 
    // The size shrinking case. Note, that the user's lambda is always invoked.
    s.resize_and_overwrite(10, [](char* buf, int n) noexcept
    {
        return std::find(buf, buf + n, ':') - buf;
    });
    std::cout << "2. " << std::quoted(s) << '\n';
 
    std::cout << "3. Copy data until the buffer is full. Print data and sizes.\n";
    std::string food{"Food:"};
    const auto resize_to{27};
    std::cout << "Initially, food.size: " << food.size()
              << ", food.capacity: " << food.capacity()
              << ", resize_to: " << resize_to
              << ", food: " << std::quoted(food) << '\n';
 
    food.resize_and_overwrite
    (
        resize_to,
        [food_size = food.size()](char* p, std::size_t n) noexcept -> std::size_t
        {
            // p[0]..p[n] is the assignable range
            // p[0]..p[min(n, food_size) - 1] is the readable range
            // (contents initially equal to the original string)
 
            // Debug print:
            std::cout << "In Operation(); n: " << n << '\n';
 
            // Copy fruits to the buffer p while there is enough space.
            char* first = p + food_size;
 
            for (char* const end = p + n; const std::string_view fruit : fruits)
            {
                char* last = first + fruit.size() + 1;
                if (last > end)
                    break;
                *first++ = ' ';
                std::ranges::copy(fruit, first);
                first = last;
            }
 
            const auto final_size{static_cast<std::size_t>(first - p)};
 
            // Debug print:
            std::cout << "In Operation(); final_size: " << final_size << '\n';
 
            assert(final_size <= n);
            return final_size; // Return value is the actual new length
                               // of the string, must be in range 0..n
        }
    );
 
    std::cout << "Finally, food.size: " << food.size()
              << ", food.capacity: " << food.capacity()
              << ", food: " << std::quoted(food) << '\n';
}
```

## See also
- [resize](/cpp/string/basic_string/resize/)
