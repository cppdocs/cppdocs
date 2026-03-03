---
title: "std::uninitialized_move_n"
source_path: "cpp/memory/uninitialized_move_n"
header: "<memory>"
category: "memory"
since: "C++17"
---

1) Copies the elements from first+[0,count) (using move semantics if supported) to an uninitialized memory area beginning at d_first as if by
for (; count > 0; ++d_first, (void) ++first, --count)
::new ([voidify](/cpp/memory/voidify/)(*d_first))
typename [std::iterator_traits](/cpp/iterator/iterator_traits/)<NoThrowForwardIt>::value_type(/* value */);
return {first, d_first};

## Declarations
```cpp
template< class InputIt, class Size, class NoThrowForwardIt >
std::pair<InputIt, NoThrowForwardIt>
uninitialized_move_n( InputIt first, Size count,
NoThrowForwardIt d_first );
```
_(since C++17) (constexpr since C++26)_

```cpp
template< class ExecutionPolicy,
class ForwardIt, class Size, class NoThrowForwardIt >
std::pair<ForwardIt, NoThrowForwardIt>
uninitialized_move_n( ExecutionPolicy&& policy, ForwardIt first,
Size count, NoThrowForwardIt d_first );
```
_(since C++17)_

## Parameters
- `first`: the beginning of the range of the elements to move
- `d_first`: the beginning of the destination range
- `count`: the number of elements to move
- `policy`: the execution policy to use

## Return value
As described above.

## Notes
When the input iterator deferences to an rvalue, the behavior of std::uninitialized_move_n is same as [std::uninitialized_copy_n](/cpp/memory/uninitialized_copy_n/).

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
    std::string in[]{"One", "Definition", "Rule"};
    print("initially, in: ", std::begin(in), std::end(in));
 
    if (constexpr auto sz = std::size(in);
        void* out = std::aligned_alloc(alignof(std::string), sizeof(std::string) * sz))
    {
        try
        {
            auto first{static_cast<std::string*>(out)};
            auto last{first + sz};
            std::uninitialized_move_n(std::begin(in), sz, first);
 
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
- [uninitialized_move](/cpp/memory/uninitialized_move/)
- [uninitialized_copy_n](/cpp/memory/uninitialized_copy_n/)
- [ranges::uninitialized_move_n](/cpp/memory/ranges/uninitialized_move_n/)
