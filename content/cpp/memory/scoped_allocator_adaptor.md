---
title: "std::scoped_allocator_adaptor"
source_path: "cpp/memory/scoped_allocator_adaptor"
header: "<scoped_allocator>"
category: "memory"
since: "C++11"
---

The std::scoped_allocator_adaptor class template is an allocator which can be used with multilevel containers (vector of sets of lists of tuples of maps, etc). It is instantiated with one outer allocator type OuterAlloc and zero or more inner allocator types InnerAlloc.... A container constructed directly with a scoped_allocator_adaptor uses OuterAlloc to allocate its elements, but if an element is itself a container, it uses the first inner allocator. The elements of that container, if they are themselves containers, use the second inner allocator, etc. If there are more levels to the container than there are inner allocators, the last inner allocator is reused for all further nested containers.

## Declarations
```cpp
template< class OuterAlloc, class... InnerAllocs >
class scoped_allocator_adaptor
: public OuterAlloc;
```
_(since C++11)_

## Example
```cpp
#include <boost/interprocess/allocators/adaptive_pool.hpp>
#include <boost/interprocess/managed_shared_memory.hpp>
#include <scoped_allocator>
#include <vector>
 
namespace bi = boost::interprocess;
 
template<class T>
using alloc = bi::adaptive_pool<T, bi::managed_shared_memory::segment_manager>;
 
using ipc_row = std::vector<int, alloc<int>>;
 
using ipc_matrix = std::vector<ipc_row, std::scoped_allocator_adaptor<alloc<ipc_row>>>;
 
int main()
{
    bi::managed_shared_memory s(bi::create_only, "Demo", 65536);
 
    // create vector of vectors in shared memory
    ipc_matrix v(s.get_segment_manager());
 
    // for all these additions, the inner vectors obtain their allocator arguments
    // from the outer vector's scoped_allocator_adaptor
    v.resize(1);
    v[0].push_back(1);
    v.emplace_back(2);
    std::vector<int> local_row = {1, 2, 3};
    v.emplace_back(local_row.begin(), local_row.end());
 
    bi::shared_memory_object::remove("Demo");
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2108 | C++11 | there was no way to show if scoped_allocator_adaptor is stateless | provided is_always_equal |

## See also
- [allocator_traits](/cpp/memory/allocator_traits/)
- [uses_allocator](/cpp/memory/uses_allocator/)
- [allocator](/cpp/memory/allocator/)
