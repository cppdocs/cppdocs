---
title: "std::uninitialized_move"
source_path: "cpp/memory/uninitialized_move"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies the elements from [first,last) (using move semantics if supported) to an uninitialized memory area beginning at d_first as if by
for (; first != last; ++d_first, (void) ++first)
::new ([voidify](/cpp/memory/voidify/)(*d_first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(/* value */);
return d_first;

## Declarations
```cpp
template< class InputIt, class NoThrowForwardIt >
NoThrowForwardIt uninitialized_move( InputIt first, InputIt last,
NoThrowForwardIt d_first );
```
_(since C++17) (constexpr since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class NoThrowForwardIt >
NoThrowForwardIt uninitialized_move( ExecutionPolicy&& policy,
ForwardIt first, ForwardIt last,
NoThrowForwardIt d_first );
```
_(since C++17)_

## Parameters
- `first, last`: the range of the elements to move
- `d_first`: the beginning of the destination range
- `policy`: the execution policy to use

## Return value
As described above.

## Notes
When the input iterator deferences to an rvalue, the behavior of std::uninitialized_move is same as [std::uninitialized_copy](/cpp/memory/uninitialized_copy/).

## Example
```cpp
#include <cstdlib>
#include <iomanip>
#include <iostream>
#include <memory>
#include <string>
 
void print(auto rem, auto first, auto last)
{
    for (std::cout << rem; first != last; ++first)
        std::cout << std::quoted(*first) << ' ';
    std::cout << '\n';
}
 
int main()
{
    std::string in[]{"Home", "Work!"};
    print("initially, in: ", std::begin(in), std::end(in));
 
    if (
        constexpr auto sz = std::size(in);
        void* out = std::aligned_alloc(alignof(std::string), sizeof(std::string) * sz))
    {
        try
        {
            auto first{static_cast<std::string*>(out)};
            auto last{first + sz};
            std::uninitialized_move(std::begin(in), std::end(in), first);
 
            print("after move, in: ", std::begin(in), std::end(in));
            print("after move, out: ", first, last);
 
            std::destroy(first, last);
        }
        catch (...)
        {
            std::cout << "Exception!\n";
        }
        std::free(out);
    }
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3870 | C++20 | this algorithm might create objects on a const storage | kept disallowed |
| LWG 3918 | C++17 | additional temporary materialization was requiredwhen the input iterator deferences to a prvalue | copies the element in this case |

## See also
- [uninitialized_copy](/cpp/memory/uninitialized_copy/)
- [uninitialized_move_n](/cpp/memory/uninitialized_move_n/)
- [ranges::uninitialized_move](/cpp/memory/ranges/uninitialized_move/)
