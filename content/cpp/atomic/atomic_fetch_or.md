---
title: "std::atomic_fetch_or, std::atomic_fetch_or_explicit"
source_path: "cpp/atomic/atomic_fetch_or"
header: "<atomic>"
category: "atomic"
since: "C++11"
---

Atomically replaces the value pointed by obj with the result of bitwise OR between the old value of obj and arg. Returns the value obj held previously.

## Declarations
```cpp
template< class T >
T atomic_fetch_or( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_or( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_or_explicit( std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order ) noexcept;
```
_(since C++11)_

```cpp
template< class T >
T atomic_fetch_or_explicit( volatile std::atomic<T>* obj,
typename std::atomic<T>::value_type arg,
std::memory_order order ) noexcept;
```
_(since C++11)_

## Parameters
- `obj`: pointer to the atomic object to modify
- `arg`: the value to bitwise OR to the value stored in the atomic object
- `order`: the memory synchronization ordering

## Return value
The value immediately preceding the effects of this function in the [modification order](/cpp/atomic/memory_order/#Modification_order) of *obj.

## Example
```cpp
#include <atomic>
#include <chrono>
#include <functional>
#include <iostream>
#include <thread>
 
// Binary semaphore for demonstrative purposes only.
// This is a simple yet meaningful example: atomic operations
// are unnecessary without threads. 
class Semaphore
{
    std::atomic_char m_signaled;
public:
    Semaphore(bool initial = false)
    {
        m_signaled = initial;
    }
    // Block until semaphore is signaled
    void take() 
    {
        while (!std::atomic_fetch_and(&m_signaled, false))
        {
            std::this_thread::sleep_for(std::chrono::milliseconds(10));
        }
    }
 
    void put() 
    {
        std::atomic_fetch_or(&m_signaled, true);
    }
};
 
class ThreadedCounter
{
    static const int N = 100;
    static const int REPORT_INTERVAL = 10;
    int m_count;
    bool m_done;
    Semaphore m_count_sem;
    Semaphore m_print_sem;
 
    void count_up() 
    {
        for (m_count = 1; m_count <= N; ++m_count)
            if (m_count % REPORT_INTERVAL == 0)
            {
                if (m_count == N)
                    m_done = true;
                m_print_sem.put(); // signal printing to occur
                m_count_sem.take(); // wait until printing is complete proceeding
            }
        std::cout << "count_up() done\n";
        m_done = true;
        m_print_sem.put();
    }
 
    void print_count() 
    {
        do
        {
            m_print_sem.take();
            std::cout << m_count << '\n';
            m_count_sem.put();
        }
        while (!m_done);
        std::cout << "print_count() done\n";
    }
 
public:
    ThreadedCounter() : m_done(false) {}
    void run() 
    {
        auto print_thread = std::thread(&ThreadedCounter::print_count, this);
        auto count_thread = std::thread(&ThreadedCounter::count_up, this);
        print_thread.join();
        count_thread.join();
    }
};
 
int main() 
{
    ThreadedCounter m_counter;
    m_counter.run();
}
```

## Defect reports
| DR | Applied to | Behavior as published | Correct behavior |
| --- | --- | --- | --- |
| P0558R1 | C++11 | exact type match was required becauseT was deduced from multiple arguments | T is only deducedfrom obj |

## See also
- [fetch_or](/cpp/atomic/atomic/fetch_or/)
- [atomic_fetch_andatomic_fetch_and_explicit](/cpp/atomic/atomic_fetch_and/)
- [atomic_fetch_xoratomic_fetch_xor_explicit](/cpp/atomic/atomic_fetch_xor/)
- [C documentation](/c/atomic/atomic_fetch_or/)
