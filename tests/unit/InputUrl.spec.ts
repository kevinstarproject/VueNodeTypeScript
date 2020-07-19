import { shallowMount } from '@vue/test-utils'
import InputUrl from '../../src/components/InputUrl.vue'

describe('InputUrl.vue', () => {
  test('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(InputUrl, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
