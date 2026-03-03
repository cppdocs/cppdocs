---
title: "std::pointer_traits"
source_path: "cpp/memory/pointer_traits"
header: "<memory>"
---

The pointer_traits class template provides the standardized way to access certain properties of pointer-like types ([fancy pointers](/cpp/named_req/Allocator/#Fancy_pointers), such as [boost::interprocess::offset_ptr](https://www.boost.org/doc/libs/release/doc/html/interprocess/offset_ptr.html)). The standard template [std::allocator_traits](/cpp/memory/allocator_traits/) relies on pointer_traits to determine the defaults for various typedefs required by [Allocator](/cpp/named_req/Allocator/).

## Declarations
```cpp
template< class Ptr >
struct pointer_traits;
```
_(since C++11)_

```cpp
template< class T >
struct pointer_traits<T*>;
```
_(since C++11)_

## Notes
The rebind member template alias makes it possible, given a pointer-like type that points to T, to obtain the same pointer-like type that points to U. For example,

A specialization for user-defined fancy pointer types may provide an additional static member function to_address to customize the behavior of std::to_address.

## Example
```cpp
#include <iostream>
#include <memory>
 
template<class Ptr>
struct BlockList
{
    // Predefine a memory block
    struct block;
 
    // Define a pointer to a memory block from the kind of pointer Ptr s
    // If Ptr is any kind of T*, block_ptr_t is block*
    // If Ptr is smart_ptr<T>, block_ptr_t is smart_ptr<block>
    using block_ptr_t = typename std::pointer_traits<Ptr>::template rebind<block>;
 
    struct block
    {
        std::size_t size{};
        block_ptr_t next_block{};
    };
 
    block_ptr_t free_blocks;
};
 
int main()
{
    [[maybe_unused]]
    BlockList<int*> bl1;
    // The type of bl1.free_blocks is BlockList<int*>:: block*
 
    BlockList<std::shared_ptr<char>> bl2;
    // The type of bl2.free_blocks is
    // std::shared_ptr<BlockList<std::shared_ptr<char>>::block>
    std::cout << bl2.free_blocks.use_count() << '\n';
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 3545 | C++11 | primary template caused hard error when element_type is invalid | made SFINAE-friendly |

## See also
- [allocator_traits](/cpp/memory/allocator_traits/)
- [addressof](/cpp/memory/addressof/)
