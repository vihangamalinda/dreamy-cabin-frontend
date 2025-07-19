import { PERFORM_GET_ALL, PERFORM_UPDATE_BY_ID, SETTINGS } from './apiConfig';
import { getData, updateData } from './apiHelper';

/*
import supabase from './supabase';

export async function getSettings() {
  const { data, error } = await supabase.from('settings').select('*').single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be loaded');
  }
  return data;
}

// We expect a newSetting object that looks like {setting: newValue}
export async function updateSetting(newSetting) {
  const { data, error } = await supabase
    .from('settings')
    .update(newSetting)
    // There is only ONE row of settings, and it has the ID=1, and so this is the updated one
    .eq('id', 1)
    .single();

  if (error) {
    console.error(error);
    throw new Error('Settings could not be updated');
  }
  return data;
}

*/
let currentSettingId = -1;
export async function getSettings() {
  const currentSetting = (await getData(SETTINGS + PERFORM_GET_ALL))[0];
  currentSettingId = currentSetting.id;
  return currentSetting;
}

export async function updateSetting(obj) {
  const id = currentSettingId !== -1 ? currentSettingId : 1;
  const url = SETTINGS + PERFORM_UPDATE_BY_ID(id);
  return await updateData({url, obj});
}
