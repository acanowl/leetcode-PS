import { DoubleLinkedList } from '@ao/data-structure'

let dbLinkedList = new DoubleLinkedList()

describe('doubleLinked', () => {

  dbLinkedList.append(10)
  dbLinkedList.append(15)
  dbLinkedList.append(20)
  dbLinkedList.append(25)
  test('after append', () => {
    expect(dbLinkedList.join('<->')).toBe('10<->15<->20<->25')
  })

  test('get value by index', () => {
    expect(dbLinkedList.getElementAt(0).val).toBe(10)
    expect(dbLinkedList.getElementAt(1).val).toBe(15)
    expect(dbLinkedList.getElementAt(5)).toBe(null)
  })

  test('get index by value', () => {
    expect(dbLinkedList.indexOf(10)).toBe(0)
    expect(dbLinkedList.indexOf(25)).toBe(3)
    expect(dbLinkedList.indexOf(50)).toBe(-1)
  })

  test('after insert', () => {
    dbLinkedList.insert(0, 5)
    dbLinkedList.insert(3, 18)
    dbLinkedList.insert(6, 30)
    expect(dbLinkedList.join('<->')).toBe('5<->10<->15<->18<->20<->25<->30')
  })

  test('find node by value', () => {
    const node = dbLinkedList.find(10)
    expect(node.val).toBe(10)
  })

  test('after remove', () => {
    expect(dbLinkedList.removeAt(0)).toBe(5)
    expect(dbLinkedList.removeAt(1)).toBe(15)
    expect(dbLinkedList.removeAt(5)).toBe(null)
    expect(dbLinkedList.remove(10)).toBe(10)
    expect(dbLinkedList.remove(100)).toBe(null)
    expect(dbLinkedList.join('<->')).toBe('18<->20<->25<->30')
  })
})