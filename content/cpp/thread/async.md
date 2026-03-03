---
title: "std::async"
source_path: "cpp/thread/async"
header: "<future>"
category: "thread"
since: "C++11"
---

The function template std::async runs the function f asynchronously (potentially in a separate thread which might be a part of a thread pool) and returns a [std::future](/cpp/thread/future/) that will eventually hold the result of that function call.

## Declarations
```cpp
template< class F, class... Args >
std::future</* see below */> async( F&& f, Args&&... args );
```
_(since C++11)_

```cpp
template< class F, class... Args >
std::future</* see below */> async( std::launch policy,
F&& f, Args&&... args );
```
_(since C++11)_

## Parameters
- `f`: Callable object to call
- `args`: parameters to pass to f
- `policy`: bitmask value, where individual bits control the allowed methods of execution

## Return value
[std::future](/cpp/thread/future/) referring to the shared state created by this call to std::async.

## Notes
The implementation may extend the behavior of the first overload of std::async by enabling additional (implementation-defined) bits in the default launch policy.

Examples of implementation-defined launch policies are the sync policy (execute immediately, within the std::async call) and the task policy (similar to std::async, but thread-locals are not cleared)

If the [std::future](/cpp/thread/future/) obtained from std::async is not moved from or bound to a reference, the destructor of the [std::future](/cpp/thread/future/) will block at the end of the full expression until the asynchronous operation completes, essentially making code such as the following synchronous:

Note that the destructors of [std::future](/cpp/thread/future/)s obtained by means other than a call to std::async never block.

## Example
```cpp
#include <algorithm>
#include <future>
#include <iostream>
#include <mutex>
#include <numeric>
#include <string>
#include <vector>
 
std::mutex m;
 
struct X
{
    void foo(int i, const std::string& str)
    {
        std::lock_guard<std::mutex> lk(m);
        std::cout << str << ' ' << i << '\n';
    }
 
    void bar(const std::string& str)
    {
        std::lock_guard<std::mutex> lk(m);
        std::cout << str << '\n';
    }
 
    int operator()(int i)
    {
        std::lock_guard<std::mutex> lk(m);
        std::cout << i << '\n';
        return i + 10;
    }
};
 
template<typename RandomIt>
int parallel_sum(RandomIt beg, RandomIt end)
{
    auto len = end - beg;
    if (len < 1000)
        return std::accumulate(beg, end, 0);
 
    RandomIt mid = beg + len / 2;
    auto handle = std::async(std::launch::async,
                             parallel_sum<RandomIt>, mid, end);
    int sum = parallel_sum(beg, mid);
    return sum + handle.get();
}
 
int main()
{
    std::vector<int> v(10000, 1);
    std::cout << "The sum is " << parallel_sum(v.begin(), v.end()) << '\n';
 
    X x;
    // Calls (&x)->foo(42, "Hello") with default policy:
    // may print "Hello 42" concurrently or defer execution
    auto a1 = std::async(&X::foo, &x, 42, "Hello");
    // Calls x.bar("world!") with deferred policy
    // prints "world!" when a2.get() or a2.wait() is called
    auto a2 = std::async(std::launch::deferred, &X::bar, x, "world!");
    // Calls X()(43); with async policy
    // prints "43" concurrently
    auto a3 = std::async(std::launch::async, X(), 43);
    a2.wait();                     // prints "world!"
    std::cout << a3.get() << '\n'; // prints "53"
} // if a1 is not done at this point, destructor of a1 prints "Hello 42" here
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| LWG 2021 | C++11 | return type incorrect and value categoryof arguments unclear in the deferred case | corrected return type andclarified that rvalues are used |
| LWG 2078 | C++11 | it was unclear whether std::system_errormay be thrown if policy specifies otherlaunch policies besides std::launch::async | can only be thrown ifpolicy == std::launch::async |
| LWG 2100 | C++11 | timed waiting functions could not timeoutif std::launch::async policy is used | allowed |
| LWG 2120 | C++11 | the behavior was unclear if no standardor implementation-defined policy is set | the behavior isundefined in this case |
| LWG 2186 | C++11 | it was unclear how the value returned and theexception thrown from the lazy evaluation are handled | they are stored inthe shared state |
| LWG 2752 | C++11 | std::async might not throw std::bad_alloc if thememory for the internal data structures cannot be allocated | throws |
| LWG 3476 | C++20 | (the decayed types of) F and the argument typeswere directly required to be move constructible | removed these requirements[1] |

## See also
- [future](/cpp/thread/future/)
- [C++ documentation](/cpp/experimental/execution/)
